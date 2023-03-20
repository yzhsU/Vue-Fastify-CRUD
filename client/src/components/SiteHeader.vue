<template>
    <header>
      <div class="header-container">
        <img src="logo.png" alt="Company Logo" width="110" height="110">
        <nav>
          <ul>
            <li><a href="#">킨더플레이룸</a></li>
            <li><a href="#">프랜차이즈</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">디자인</a></li>
          </ul>
        </nav>
        <div class="header-right">
          <a href="#"><i class="fa fa-comments"></i></a>
          <a href="#"><i class="fa fa-envelope"></i></a>
        </div>
      </div>
    </header>
</template>

<style>
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    height: 18rem;
}

img {
    width: 110px;
    height: 110px;
}

nav {
  display: flex;
  justify-content: space-between;
}

.header-right {
    display: flex;
    align-items: center;
}

.header-right a {
    margin-left: 1rem;
}

@media only screen and (min-width: 900px) {
  nav {
    display: none;
  }

  .list-icon {
    display: block;
  }
}
</style>
