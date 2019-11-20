import React, { useRef, useEffect } from 'react';

// Importing 3rd Party WebComponents
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';

const MyForm = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const buttonRef = useRef(null);
  const gridRef = useRef(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    let people = [];

    const onButtonClick = () => {
      people = [ 
        ...people,
        {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value
        }
      ];
      gridRef.current.items = people; 
      firstNameRef.current.value = ''; 
      lastNameRef.current.value = '';
    }

    button.addEventListener('click', onButtonClick);

    return () => {
      button.removeEventListener('click', onButtonClick);
    };
  }, []);

  return (
    <div>
      <div className="form">
        <vaadin-text-field label="First Name" ref={firstNameRef} />
        <vaadin-text-field label="Last Name" ref={lastNameRef} />
        <vaadin-button ref={buttonRef}> Add </vaadin-button>
      </div>
      <vaadin-grid ref={gridRef}>
        <vaadin-grid-column path="firstName" header="First name" /> 
        <vaadin-grid-column path="lastName" header="Last name" />
      </vaadin-grid>
    </div>
  );
}

// Or we can use a class component

// class MyForm extends Component {
//   componentDidMount() {
//     let people = []; 
//     this.refs.addButton.addEventListener('click', e => { 
//       people = [ 
//         ...people,
//         {
//           firstName: this.refs.firstName.value,
//           lastName: this.refs.lastName.value
//         }
//       ];
//       this.refs.grid.items = people; 
//       this.refs.firstName.value = ''; 
//       this.refs.lastName.value = '';
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div className="form">
//           <vaadin-text-field label="First Name" ref="firstName" />
//           <vaadin-text-field label="Last Name" ref="lastName" />
//           <vaadin-button ref="addButton"> Add </vaadin-button>
//         </div>
//         <vaadin-grid ref="grid">
//           <vaadin-grid-column path="firstName" header="First name" /> 
//           <vaadin-grid-column path="lastName" header="Last name" />
//         </vaadin-grid>
//       </div>
//     );
//   }
// }

export default MyForm;
