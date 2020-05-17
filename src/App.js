import React , {useEffect , useState} from 'react';


const App =props => {

const [student_id , setstudent_id]=useState(1);
const [student , setstudentobject]=useState({

   })

   var i=2;


   function butfunc(){


    setstudent_id(i+1);
    

   }

function test_fun(){


    console.log("Fun call");
    console.log("props",props)

    let _studobj={
        "name": "Mohan",
        "student_id":1
    }

    setstudentobject(

        _studobj
    )
    
}



    useEffect(

            ()=>
            {
                console.log("Use Effect Fired");
                test_fun();
            },[]



      )

return(

<>
 <h3> Student ID is {student_id} </h3>
    <h1> Hello World  { JSON.stringify(student)}</h1>
    <h2> Belong to State {props.state_name} </h2>
    <button name="clickbutton" onClick={butfunc} > Clickme </button>
    </>
)

}


export default App;