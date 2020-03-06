import React from 'react';

const SearchForm = (props) => {
    return ( 
        <>
        <form
        onSubmit={props.submit}
        >
            <input 
            type="text" 
            value={props.value} 
            onChange={props.change}></input>
            <input type="submit" value="Search"></input>
        </form>
        </>
     );
}
 
export default SearchForm;