import React, {useState} from "react";
import {Button} from "react-bootstrap";
import Searchbar from "../Navbar/Searchbar";

function Dummy() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        variant='outiline-color-light'
        className='second-button mr-4'
        style={{position: "absolute", zIndex: 1}}
        onClick={() => setOpen(true)}
      >
        <i class='fa-sharp fa-solid fa-magnifying-glass'></i>
      </Button>
      {open && <Searchbar />}
    </div>
  );
}

export default Dummy;
