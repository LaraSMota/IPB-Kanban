import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBoard } from "../actions";
import BoardThumbnail from "./BoardThumbnail";
import Navbar from './Navbar';



const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;


const CreateInput = styled.input`
  width: 400px;
  height: 80px;
  font-size: 22px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
  outline-color: blue;
  box-shadow: 0 2px 4px grey;
  align-self: center;
`;

const Home = ({ boards, boardOrder, dispatch, boardID }) => {
  // this is the home site that shows you your boards and you can also create a Board here.

  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = e => {
    setNewBoardTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
  };


  const renderBoards = () => {
    
    return boardOrder.map(boardID => {
      const board = boards[boardID];

      return (
        <Link
          key={boardID}
          to={`/${board.id}`}
          style={{ textDecoration: "none" }}
        >
          <BoardThumbnail {...board} />
        </Link>
      );
    });
  };

  const renderCreateBoard = () => {
    return (
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <CreateInput
          onChange={handleChange}
          value={newBoardTitle}
          placeholder="Title"
          type="text"
        />
      </form>
    );
  };

  

  return (
    <div>
    <Navbar/>
      <div className="main-container">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="page-header mb-4">
                <div className="media">
                  <div className="media-body ml-3">
                    <h1
                      className="mb-0"
                      style={{
                        color: "#D7E868"
                      }}
                    >
                      Home
                      
                    </h1>
                  </div>
                </div>
              </div>
            
              
              <div className="tab-content">
              
      
                     <div className="row content-list-head">
                     <div className="col-auto">
                      <h3
                        style={{
                          color: "#61B8A2",
                          backgroundColor: "#454545",
                          padding: 15,
                          borderRadius: 10,
                          fontSize: 20
                        }}
                      >
                      Your boards
                      </h3>
                      <button
                        className="btn btn-round"
                        data-toggle="modal"
                        data-target="#team-add-modal"
                        style={{
                          backgroundColor: "#454545"
                        }}
                       >
                        <i
                          className="material-icons"
                          style={{
                            color: "#D7E868",
                            backgroundColor: "#454545"
                          }}
                        >
                          add
                        </i>
                      </button>
                    </div>
                  </div>
                    
                        
                  <HomeContainer>
                  <Thumbnails>{renderBoards()}</Thumbnails>
                  
  
                  </HomeContainer>
                 
                  
                  </div>
                  </div>
                  
                
                {}
              </div>
              <form
                className="modal fade"
                id="team-add-modal"
                tabIndex={-1}
                aria-hidden="true"
               >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div
                      className="modal-header"
                      style={{
                        backgroundColor: "#393B39"
                      }}
                    >
                      <h5
                        className="modal-title"
                        style={{
                          backgroundColor: "#393B39"
                        }}
                      >
                        Create a new board
                      </h5>
                      <button
                        type="button"
                        className="close btn btn-round"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="material-icons">close</i>
                      </button>
                    </div>
                    {}
                    <ul className="nav nav-tabs nav-fill" role="tablist"></ul>
                    <div className="modal-body">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="team-add-details"
                          role="tabpanel"
                         >
                          <div className="form-group row align-items-center">
                          <Thumbnails>{renderCreateBoard()}</Thumbnails>
                          </div>
                          
              
                
                        </div>
                      </div>
                    </div>
                    {}

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder
});

export default connect(mapStateToProps)(Home);
