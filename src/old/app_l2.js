import React from 'react';
import HW1 from './l1/hw1.js';
import HW2 from './l1/hw2.js';
import Input from './l1/norm_input.js';

export default function(){
    return (
      <div>
        <h2>Counter lesson 1 version 1</h2>
        <HW1 min={5} max={10}/>
        <h2>Counter lesson 1 version 2</h2>
        <HW2 min={5} max={10}/>
        <h2>Norm input</h2>
        <Input min={50} max={100}/>
        <hr/>
      </div>
    );
}