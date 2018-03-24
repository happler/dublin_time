import Board from './board';

class Game{
  constructor(){
    this.board = new Board();
    // this.setKeyListeners();
    this.render();

  }

  // setKeyListeners(){
  //   $('body').keydown(e =>{
  //     switch (e.which) {
  //       case 37:
  //       case 65:
  //         this.board.makeMove('left');
  //         this.render();
  //         break;
  //       case 38:
  //       case 87:
  //         this.board.makeMove('up');
  //         this.render();
  //         break;
  //       case 39:
  //       case 68:
  //         this.board.makeMove('right');
  //         this.render();
  //         break;
  //       case 40:
  //       case 83:
  //         this.board.makeMove('down');
  //         this.render();
  //         break;
  //
  //     }
  //   });
  // }

  render(){
    console.log(this.board.grid);
    console.log(this.board.score);
  }

  draw(ctx){
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle('#B9ADA1');
    ctx.fillRect(0, 0, 500, 500);
    this.board.draw(ctx);
  }
}

export default Game;