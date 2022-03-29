<template>
  <div class="toolbar">
    <nav>
      <ul>
        <li><a class="active" href="#home">Overview</a></li>
        <li><a href="#news">activity log</a></li>
        <li><a href="#contact">members</a></li>
        <li><a href="#about">accesses</a></li>
        <li><a href="#news">Tasks</a></li>
        <li><a href="#contact">assets</a></li>
        <li><a href="#about">Meetings</a></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 3px 26px #00000008;
  border-radius: 41px;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  text-transform: uppercase;
}

li a:hover {
  background-color: #111;
}
</style>
