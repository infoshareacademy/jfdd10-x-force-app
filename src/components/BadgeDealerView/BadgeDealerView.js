import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BadgeDealerList from '../BadgeDealerList/BadgeDealerList'
import './BadgeDealerView.css'

class BadgeDealerView extends Component {
  static propTypes = {

  }

  render() {
    return  (
      <div className="BadgeDealerView">
       <h1>Badge dealers</h1>
       <BadgeDealerList
  badgeDealers={[
    {
      badges: [
        "http://placehold.jp/60x60.png",
      
      ],
      description:
        "Lorem ipsum to roboczy tekst używany do celów projektowych, zwykle do prezentacji kroju pisma, kompozycji.Lorem ipsum to roboczy tekst używany do celów projektowych, zwykle do prezentacji kroju pisma, kompozycji",
      avatar: "http://placehold.jp/150x150.png"
    },
    {
      badges: [
        "http://placehold.jp/60x60.png",
        "http://placehold.jp/60x60.png",
        "http://placehold.jp/60x60.png",
        "http://placehold.jp/60x60.png"
      ],
      description:
        "Lorem ipsum to risma, kompozycji",
      avatar: "http://placehold.jp/150x150.png"
    },
    {
      badges: [
        "http://placehold.jp/60x60.png",
        "http://placehold.jp/60x60.png",
      
      ],
      description:
        "Lorem ipsum to risma, kompozycji",
      avatar: "http://placehold.jp/150x150.png"
    }
  ]}
/>
      </div>
    )
  }
}

export default BadgeDealerView