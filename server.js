const express = require('express');
const path = require('path');
var request = require('request');

const app = express();

const DIST_DIR = path.join(__dirname, 'build')

app.use(express.static(DIST_DIR));

app.get('/api/politifact/statementlist', async (req, res) => {
  const first = req.query.fname
  const last = req.query.lname

  const url = `https://www.politifact.com/api/v/2/statementlist/?speaker__name_slug=${first}-${last}&limit=5&format=json`

  // const response = await request(url)
  const x = await request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log('carrot', body) // Print the google web page.
      res.json(body)
    } else {
      res.json({carrot: '12'})
    }
  })

  // console.log('stuff', res.json(x))
  // console.log('stuffz', res.json(response))
  // const response = {
  //   speaker: {
  //     id: 1019,
  //     photo: "https://s3.amazonaws.com/static.politifact.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
  //     website: "https://www.donaldjtrump.com/",
  //     current_job: "President",
  //     first_name: "Donald",
  //     last_name: "Trump",
  //     party:"Republican",
  //     total_rulings: {
  //       barely_true_count: 135,
  //       false_count: 212,
  //       half_true_count: 93,
  //       mostly_true_count: 72,
  //       pants_count: 92,
  //       total_count: 650,
  //       true_count: 29
  //     }
  //   },
  //   statements: [
  //     {
  //       id: 16253,
  //       statement:"<p>Says of immigrant family separations at the border, &quot;we had the exact same policy as the Obama administration.&quot;</p>\r\n",
  //       statement_date: "2018-11-25",
  //       statement_context: "a rally in Wheeling, W.Va.",
  //       canonical_url: "/truth-o-meter/statements/2018/nov/29/donald-trump/donald-trump-falsely-says-family-separations-were-/",
  //       ruling: "False",
  //       ruling_graphic: "https://s3.amazonaws.com/static.politifact.com/rulings/tom-false.png",
  //       ruling_headline: "Donald Trump falsely says family separations were Obama policy",
  //       ruling_link_text: "Not the same",
  //     }
  //   ]
  // }

  // res.json(response)
});

app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(process.env.PORT || 8080);
