import PropTypes from 'prop-types';
import React, { useState } from 'react';

const HelloWorld = (props) => {
  const [name, setName] = useState(props.name);

  return (
    <div>
      <h3>Welcome to {name}!</h3>
      <div style={{ margin: '16px 0'}}>
        This is being rendered by <pre style={{ display: 'inline'}}>app/javascript/components/welcome/hello_world.jsx</pre>
        <br />
        <br />
        The rails view is <pre style={{ display: 'inline'}}>app/views/welcome/index.html.erb</pre>
      </div>
      <hr />
      <form style={{margin: '16px 0 0'}}>
        <label htmlFor="name">
          Application Name:
          <input style={{ marginLeft: '8px'}} id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </form>
    </div>
  );
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
