import React, { useRef, useImperativeHandle } from "react";

const Input = React.forwardRef((props, ref) => {
   const inputRef = useRef('');

   const inputValue = () => {
      return inputRef.current.value;
   }
   useImperativeHandle(ref, () => {
      return { inputValue }
   })
   return (
      <input type={props.type} id={props.id} onBlur={props.onBlur} ref={inputRef} />
   )
});

export default Input;