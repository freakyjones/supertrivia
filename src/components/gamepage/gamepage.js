import React from 'react';
import Header from '../landingpage/header';
import Test from '../homepage/test';
import Game_main from './game_heading';
import Game_question from './game_question';
import Game_result from './game_answer';


const Game=(props)=>{
      return(
          <div className="gamepage">
            <Header/>
            <Game_main/>
            <Game_question/>
            <Game_result/>
            <Test/>
          </div>
      )
}

export default Game;