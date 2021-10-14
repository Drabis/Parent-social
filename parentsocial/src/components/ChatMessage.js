import React from 'react'

export default ({ name, message }) =>
<div class="card">
  <div class="card-header">
    {name}
  </div>
  <div class="card-body">
    <p class="card-text">
    <div class="alert alert-primary" role="alert">
        {message}
    </div>
    </p>
  </div>
</div>



