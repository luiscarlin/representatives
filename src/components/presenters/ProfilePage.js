import React from 'react'
import './profile-page.scss'
import capitolSvg from "../../assets/capitol.svg";
import Img from "react-image";
import { Pie } from '@nivo/pie'

const averageRating = (repRulings) => {
  const absoluteLie = (0 * repRulings.pants_count) / repRulings.total_count
  const completelyFalse = (1 * repRulings.false_count) / repRulings.total_count
  const barelyTrue = (2.5 * repRulings.barely_true_count) / repRulings.total_count
  const halfTrue = (5 * repRulings.half_true_count) / repRulings.total_count
  const mostlyTrue = (7.5 * repRulings.mostly_true_count) / repRulings.total_count
  const completelyTrue = (10 * repRulings.true_count) / repRulings.total_count

  return ((
    absoluteLie +
    completelyFalse +
    barelyTrue +
    halfTrue +
    mostlyTrue +
    completelyTrue
  ) * 10).toFixed(2)
}

const pie = (repRulings) => (
  <Pie
    width={500}
    height={500}
    data={[
      {
        "id": "Absolute Lie",
        "label": "Absolute Lie",
        "value": repRulings.pants_count,
        "color": "hsl(17, 70%, 50%)"
      },
      {
        "id": "Completely False",
        "label": "Completely False",
        "value": repRulings.false_count,
        "color": "hsl(195, 70%, 50%)"
      },
      {
        "id": "Barely True",
        "label": "Barely True",
        "value": repRulings.barely_true_count,
        "color": "hsl(229, 70%, 50%)"
      },
      {
        "id": "Half True",
        "label": "Half True",
        "value": repRulings.half_true_count,
        "color": "hsl(72, 70%, 50%)"
      },
      {
        "id": "Mostly True",
        "label": "Mostly True",
        "value": repRulings.mostly_true_count,
        "color": "hsl(73, 70%, 50%)"
      },
      {
        "id": "Completely True",
        "label": "Completely True",
        "value": repRulings.true_count,
        "color": "hsl(229, 70%, 50%)"
      }
    ]}
    margin={{
      "top": 0,
      "right": 125,
      "bottom": 125,
      "left": 100
    }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    colors="set1"
    colorBy="id"
    borderWidth={1}
    borderColor="inherit:darker(0.2)"
    radialLabel={'id'}
    radialLabelsSkipAngle={10}
    radialLabelsTextXOffset={6}
    radialLabelsTextColor="#333333"
    radialLabelsLinkOffset={3}//
    radialLabelsLinkDiagonalLength={16}
    radialLabelsLinkHorizontalLength={0}//
    radialLabelsLinkStrokeWidth={1}
    radialLabelsLinkColor="inherit"
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor="#333333"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    defs={[
      {
        "id": "dots",
        "type": "patternDots",
        "background": "inherit",
        "color": "rgba(255, 255, 255, 0.3)",
        "size": 4,
        "padding": 1,
        "stagger": true
      },
      {
        "id": "lines",
        "type": "patternLines",
        "background": "inherit",
        "color": "rgba(255, 255, 255, 0.3)",
        "rotation": -45,
        "lineWidth": 6,
        "spacing": 10
      }
    ]}
  />
)

class ProfilePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {repRulings: {}}
  }

  componentDidMount() {
      fetch('/api/politifact/statementlist/?fname=donald&lname=trump')
        .then(response => response.json())
        .then(x => this.setState({ repRulings: x.speaker.total_rulings }))
  }

  render() {
    console.log('state: ', this.state.repRulings)
    const classes = []
    classes.push('profile-modal')
    if (!this.props.shouldDisplayModal) {
      classes.push('hidden')
    }

    return <div className={classes.join(' ')}>
      <div className='top-banner'>
        <div className='info'>
          <Img
            src={[this.props.representativeInfo.photoUrl, capitolSvg]}
            loader={<img src={capitolSvg} alt={this.props.representativeInfo.name}/>}
          />
          <div className='name'>{this.props.representativeInfo.name}</div>
          <div className='office'>
            {this.props.representativeInfo.office} - {this.props.representativeInfo.party} Party
          </div>
        </div>
      </div>

      <div className='truthiness'>
        <div className='pie-title'>
          {this.props.representativeInfo.name}'s Truthfulness Rating:
        </div>
        <div className={'truth-rating'}>
          {averageRating(this.state.repRulings)}%
        </div>
        {pie(this.state.repRulings)}
      </div>
    </div>

  }
}

export default ProfilePage
