import React, {Component} from 'react';
import _ from 'lodash';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {Board} from './Board';
import Navbar from '../Navbar/index';

let _columnId = 0;
let _cardId = 0;

class Main extends Component {
  state = {
    columns: [
      ['TO DO', ['Some thing', 'Another thing']],
      ['DOING', ['A great task']],
      ['DONE', ['Completed task']],
    ].map(([columnTitle, cardTitles]) => ({
      id: _columnId++,
      title: columnTitle,
      cards: cardTitles.map(cardTitle => ({
        id: ++_cardId,
        title: cardTitle,
      })),
    }))
  };

  addColumn = title => {
    this.setState(({columns}) => {
      const newColumn = {id: ++_columnId, title, cards: []};
      return {columns: [...columns, newColumn]};
    });
  };

  addCard = (columnId, title) => {
    this.setState(state => {
      const newCard = {id: ++_cardId, title};
      return updateColumnCards(
        state.columns.findIndex(column => column.id === columnId),
        cards => [...cards, newCard]
      )(state);
    });
  };

  moveCard = (cardId, [destX, destY]) => {
    this.setState(state => {
      const [curX, curY] = getCoordinates(state, cardId);
      // 1) Stash card so we can insert at destination
      const card = state.columns[curX].cards[curY];

      return _.flowRight([
        // 3) Insert card at destination position
        updateColumnCards(destX, cards => [
          ...cards.slice(0, destY),
          card,
          ...cards.slice(destY)
        ]),
        // 2) Remove card from current position
        updateColumnCards(curX, cards => [
          ...cards.slice(0, curY),
          ...cards.slice(curY + 1)
        ])
      ])(state);
    });
  };

  render() {
    return (
      <div>
        <Navbar/>
        <div className="container-kanban">
        <div className="container-fluid page-header d-flex justify-content-between align-items-start">
                <div>
                  <h1
                    style={{
                      color: "blanchedalmond"
                    }}
                  >
                    EXAMPLE TEAM
                  </h1>
                </div>
                <div className="d-flex align-items-center">
                  <ul className="avatars">
                    <li>
                      <a
                        href="a"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Claire Connors"
                      >
                        <img
                          alt="Claire Connors"
                          className="avatar"
                          src="assets\\img\\avatar-female-1.jpg"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="a"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Marcus Simmons"
                      >
                        <img
                          alt="Marcus Simmons"
                          className="avatar"
                          src="assets\\img\\avatar-male-1.jpg"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="a"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Peggy Brown"
                      >
                        <img
                          alt="Peggy Brown"
                          className="avatar"
                          src="assets\\img\\avatar-female-2.jpg"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="a"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Harry Xai"
                      >
                        <img
                          alt="Harry Xai"
                          className="avatar"
                          src="assets\\img\\avatar-male-2.jpg"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="a"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Sally Harper"
                      >
                        <img
                          alt="Sally Harper"
                          className="avatar"
                          src="assets\\img\\avatar-female-3.jpg"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="a"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Ravi Singh"
                      >
                        <img
                          alt="Ravi Singh"
                          className="avatar"
                          src="assets\\img\\avatar-male-3.jpg"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="a"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Kristina Van Der Stroem"
                      >
                        <img
                          alt="Kristina Van Der Stroem"
                          className="avatar"
                          src="assets\\img\\avatar-female-4.jpg"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="a"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="David Whittaker"
                      >
                        <img
                          alt="David Whittaker"
                          className="avatar"
                          src="assets\\img\\avatar-male-4.jpg"
                        />
                      </a>
                    </li>
                  </ul>
                  <button
                    className="btn btn-round"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add User"
                  >
                    <i
                      className="material-icons"
                      style={{
                        color: "#D7E868"
                      }}
                    >
                      add
                    </i>
                  </button>
                </div>
              </div>
              <div className="container-fluid mt-lg-3">

        <Board
        columns={this.state.columns}
        moveCard={this.moveCard}
        addCard={this.addCard}
        addColumn={this.addColumn}
             />
            </div>
      </div>
      </div>
    

    );
  }
}

function updateColumnCards(columnIndex, updateCards) {
  return ({columns}) => ({
    columns: Object.assign([...columns], {
      [columnIndex]: {
        ...columns[columnIndex],
        cards: updateCards(columns[columnIndex].cards)
      }
    })
  });
}

function getCoordinates(state, cardId) {
  let y;
  const x = state.columns.findIndex(column => {
    y = column.cards.findIndex(card => card.id === cardId);
    return y !== -1;
  });

  return [x, y];
}

export default DragDropContext(HTML5Backend)(Main);
