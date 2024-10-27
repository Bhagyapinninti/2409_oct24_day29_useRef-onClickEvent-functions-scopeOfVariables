import React, { useRef } from "react";

function Forms() {
    let telInputRef = useRef();
    let hinInputRef = useRef();
    let engInputRef = useRef();
    let matInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();
    let resultLabelRef= useRef();

 let FirstnameInputRef= useRef();
 let LastnameInputRef= useRef();

  return (
    <div>
      <form>
        <h1>SSC Marks Sheet</h1>
        

       
        <div>
          <label>Firstname</label>
          <input ref={FirstnameInputRef}></input>
        </div>
        <div>
          <label>Lastname</label>
          <input ref={LastnameInputRef}></input>
        </div>
        <div>
          <label>Telugu</label>
          <input type='number' ref={telInputRef}></input>
        </div>
        <div>
          <label>English</label>
          <input type='number' ref={engInputRef}></input>
        </div>
        <div>
          <label>Hindi</label>
          <input type='number'ref={hinInputRef}></input>
        </div>
        <div>
          <label>Maths</label>
          <input type='number'ref={matInputRef}></input>
        </div>
        <div>
          <label>Science</label>
          <input type='number'ref={sciInputRef}></input>
        </div>
        <div>
          <label>Social</label>
          <input type='number'ref={socInputRef}></input>
        </div>

        

        <div>
          <button
            type="button"
            onClick={() => {

                let Firstname=FirstnameInputRef.current.value;
                let Lastname=LastnameInputRef.current.value;

                let telmarks=Number(telInputRef.current.value);
                let engmarks= Number(engInputRef.current.value);
                let hinmarks= Number(hinInputRef.current.value);
                let matmarks= Number(matInputRef.current.value);
                let scimarks= Number(sciInputRef.current.value);
                let socmarks= Number(socInputRef.current.value);

                let totalmarks=telmarks+engmarks+hinmarks+matmarks+scimarks+socmarks;


              alert(`${Firstname} ${Lastname} Total Marks are ${totalmarks}`);
              console.log(totalmarks);
              resultLabelRef.current.innerHTML=`${Firstname} ${Lastname} Total Marks are ${totalmarks}`
              

            }}
          >
            Result
          </button>
          </div>

          <label className="innerlabel" ref={resultLabelRef}>Please enter the Above button to get the Total Marks</label>
      </form>
    </div>
  );
}

export default Forms;
