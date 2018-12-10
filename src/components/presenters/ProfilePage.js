import React from 'react'
import './profile-page.scss'
import capitolSvg from "../../assets/capitol.svg";
import Img from "react-image";
import { Pie } from '@nivo/pie'


const TOTAL_COUNT_OF_VERIFIED_COMMENTS = 650

const averageRating = () => {
  const absoluteLie = (0 * 92) / TOTAL_COUNT_OF_VERIFIED_COMMENTS
  const completelyFalse = (1 * 212) / TOTAL_COUNT_OF_VERIFIED_COMMENTS
  const barelyTrue = (2.5 * 135) / TOTAL_COUNT_OF_VERIFIED_COMMENTS
  const halfTrue = (5 * 93) / TOTAL_COUNT_OF_VERIFIED_COMMENTS
  const mostlyTrue = (7.5 * 72) / TOTAL_COUNT_OF_VERIFIED_COMMENTS
  const completelyTrue = (10 * 29) / TOTAL_COUNT_OF_VERIFIED_COMMENTS

  return ((
    absoluteLie +
    completelyFalse +
    barelyTrue +
    halfTrue +
    mostlyTrue +
    completelyTrue
  ) * 10).toFixed(2)
}

const percentage = (number) => {
  return ((number / TOTAL_COUNT_OF_VERIFIED_COMMENTS) * 100).toFixed(2)
}

const pie = () => (
  <Pie
    width={500}
    height={500}
    data={[
      {
        "id": "Absolute Lie",
        "label": "Absolute Lie",
        "value": percentage(92),
        "color": "hsl(17, 70%, 50%)"
      },
      {
        "id": "Completely False",
        "label": "Completely False",
        "value": percentage(212),
        "color": "hsl(195, 70%, 50%)"
      },
      {
        "id": "Barely True",
        "label": "Barely True",
        "value": percentage(135),
        "color": "hsl(229, 70%, 50%)"
      },
      {
        "id": "Half True",
        "label": "Half True",
        "value": percentage(93),
        "color": "hsl(72, 70%, 50%)"
      },
      {
        "id": "Mostly True",
        "label": "Mostly True",
        "value": percentage(72),
        "color": "hsl(73, 70%, 50%)"
      },
      {
        "id": "Completely True",
        "label": "Completely True",
        "value": percentage(29),
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
    // legends={[
    //   {
    //     "anchor": "bottom",
    //     "direction": "row",
    //     "translateY": 56,
    //     "itemWidth": 100,
    //     "itemHeight": 18,
    //     "itemTextColor": "#999",
    //     "symbolSize": 18,
    //     "symbolShape": "circle",
    //     "effects": [
    //       {
    //         "on": "hover",
    //         "style": {
    //           "itemTextColor": "#000"
    //         }
    //       }
    //     ]
    //   }
    // ]}
  />
)

class ProfilePage extends React.Component {

  render() {
    console.log('rep ', this.props.representativeInfo)

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
          {averageRating()}%
        </div>
        {pie()}
      </div>
    </div>

  }
}

export default ProfilePage