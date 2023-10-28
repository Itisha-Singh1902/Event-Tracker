import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../App.css';
import Image from './Image';

const CenteredTabs = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const text = props.openhrs;
  const text1  = props.generalInfo;
  const text2 = props.childRule;
  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
      <TabList className="option-navigation">
        <Tab className="option">Event</Tab>
        <Tab className="option">Venue</Tab>
      </TabList>

      <TabPanel>
        <div className="option-content">
        <div className="maindatadiv">
                <div className="datadiv">
                <p className="textcard">Date</p>
                <p className="textcard">{props.date}</p>
                <p className="textcard">Artist/Team</p>
                {/* <p className="textcard">{props.cardInfo._embedded.venues[0].market[0].name}</p> */}
                <p className="textcard">Venue</p>
                <p className="textcard">{props.venue}</p>
                <p className="textcard">Genre</p>
                <p className="textcard">{props.genre}</p>
                <p className="textcard">Price Ranges</p>
                <p className="textcard">{props.price}</p>
                <p className="textcard">Ticket Status</p>
                <p className="textcard" id="statusbutton">{props.ticket}</p>
                <p className="textcard">But Tickets at:</p>
                <p className="textcard"><a href={props.buy}>Ticket URL</a></p>
                </div>
                <div className="divimg">
                <Image
                    image={props.image}
                />
                </div>
                </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="option-content">
        <div className='namediv'>
          <p className='venuetext'>Name</p>
          <p className='venuetextdata'>{props.venue}</p>
          <p className='venuetext'>Phone No.</p>
        </div>
        <div className='rulediv'>
          <p className='ruletext'>Open Hours</p>
          <p className='ruletextdata'>
          {showMore ? text : `${text.toString().slice(0, 150)}`}
          <button style={{color:"rgb(106, 106, 245)"}} className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}
          </button>
          </p>
          <p className='ruletext'>General Rule</p>
          <p className='ruletextdata'>
          {showMore1 ? text1 : `${text1.toString().slice(0, 200)}`}
          <button style={{color:"rgb(106, 106, 245)"}} className="btn" onClick={() => setShowMore1(!showMore1)}>{showMore1 ? "Show less" : "Show more"}
          </button>
          </p>
          <p className='ruletext'>Child Rule</p>
          <p className='ruletextdata'>
          {showMore2 ? text2 : `${text2.toString().slice(0, 150)}`}
          <button style={{color:"rgb(106, 106, 245)"}} className="btn" onClick={() => setShowMore2(!showMore2)}>{showMore2 ? "Show less" : "Show more"}
          </button>
          </p>
        </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default CenteredTabs;
