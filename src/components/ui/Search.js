import React, { useState } from "react";

const Search = (props) => {
  return (
    <section className="searchBtn">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={props.text}
          onChange={(e) => {
            e.persist();
            props.onChange(e);
          }}
          type="text"
          className="form-control"
          placeholder="Search Characters"
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
