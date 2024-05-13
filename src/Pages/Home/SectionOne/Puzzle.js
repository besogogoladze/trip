import React, { useEffect } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import puzzleGame from "../../../Images/puzzleGame.jpg";
import img from "../../../Images/IMG_3903.PNG";
import img_guid from "../../../Images/ipi-guide-metier-popup.png";
import { Container } from "@mui/material";
import { Button } from "@mui/material";

function Puzzle() {
  const [puzzleAppair, setPuzzleAppair] = React.useState(false);
  const [reloadButton, setReloadButton] = React.useState(false);
  const [puzzle, setPuzzle] = React.useState(true);
  const [randomNumber, setRandomNumber] = React.useState(0);
  let images = [img, img_guid];

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    setRandomNumber(randomNumber);
    setPuzzleAppair(true);
  };
  useEffect(() => {
    setPuzzle(true);
    setReloadButton(false);
    setRandomNumber(Math.floor(Math.random() * images.length));
  }, [puzzle, images.length]);

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {puzzleAppair ? (
        <>
          {reloadButton && (
            <div
              style={{
                marginTop: "30px",
                marginBottom:'50px',
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p className="kodeMonoFont"> Congrats you did it!</p>
              <Button
                style={{ color: "green", borderColor: "green" }}
                variant="outlined"
                size="medium"
                onClick={() => setPuzzle(false)}
              >
                reload puzzle
              </Button>
            </div>
          )}
          <div>
            <div
              style={{
                position: "relative",
                width: randomNumber === 1 ? "400px" : "300px",
                height: "unset",
                backgroundColor: "#000",
                border: "1px #000 solid",
              }}
            >
              {puzzle && (
                <div>
                  <JigsawPuzzle
                    style={{
                      height: "unset",
                    }}
                    imageSrc={images[randomNumber]}
                    rows={2}
                    columns={2}
                    onSolved={() => setReloadButton(true)}
                  />
                </div>
              )}
            </div>
            <Button
              style={{
                color: "#d33",
                borderColor: "#d33",
                backgroundColor: "#fff",
                marginTop: "20px",
              }}
              variant="outlined"
              size="medium"
              onClick={() => setPuzzleAppair(false)}
            >
              Finish Game
            </Button>
          </div>
        </>
      ) : (
        <div style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
          <img style={{ width: "100%" }} src={puzzleGame} alt="Error" />
          <Button
            style={{
              color: "#d33",
              borderColor: "#d33",
              position: "absolute",
              bottom: "50%",
              left: "35%",
              backgroundColor: "#fff",
            }}
            variant="outlined"
            size="medium"
            onClick={generateRandomNumber}
          >
            Play Puzzle
          </Button>
        </div>
      )}
    </Container>
  );
}

export default Puzzle;
