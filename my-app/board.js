import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var Board = function(size){
  this.current_color = black;
  this.size = size;
  this.board = this.create_board(size);
  this.last_move_passed = false;
  this.in_atari = false;
  this.attempted_suicide = false;
}

board.EMPTY = 0;
board.BLACK = 1;
board.WHITE = 2;