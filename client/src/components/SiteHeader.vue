<template>
  <header>
    <div class="header-container">
      <div class="logo-container">
        <img class="logo" src="images/logo.png" />
      </div>
      <div class="header-right-div">
        <nav>
          <ul>
            <li>
              <a href="#">킨더플레이룸</a>
              <div class="sub-menu">
                <ul>
                  <li>Menu 1</li>
                  <li>Menu 2</li>
                  <li>Menu 3</li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">프랜차이즈</a>
              <div class="sub-menu">
                <ul>
                  <li>Menu 1</li>
                  <li>Menu 2</li>
                  <li>Menu 3</li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">News</a>
              <div class="sub-menu">
                <ul>
                  <li>Menu 1</li>
                  <li>Menu 2</li>
                  <li>Menu 3</li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">디자인</a>
              <div class="sub-menu">
                <ul>
                  <li>Menu 1</li>
                  <li>Menu 2</li>
                  <li>Menu 3</li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">회원메뉴</a>
            </li>
          </ul>
        </nav>
        <div class="header-right">
          <div class="box yellow">
            <a href="#"><i class="fa fa-comments"></i></a>
          </div>
          <div class="box blue">
            <a href="#"><i class="fa fa-envelope"></i></a>
          </div>
          <div class="box green">
            <a href="#"><i class="fa fa-naver"></i></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 12rem;
}

.logo-container {
  .logo {
    margin-left: 4rem;
    width: 8rem;
    height: auto;
  }
}

.header-right-div {
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: row;

  > nav {
    display: flex;
    justify-content: space-between;

    > ul {
      display: flex;
      flex-direction: row;

      > li {
        position: relative;
        display: inline-block;
        padding: 1rem;

        // border: dashed 2px black;
        // background: gray;
      }
    }
  }
}

.sub-menu {
  z-index: 1;
  display: none;
  position: absolute;
  top: 100%;
  background-color: #fff;
  border: 1px solid #000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  transform: translateX(-50%) translateY(10px);
  padding: 1rem;
  min-width: fit-content;

  > ul {
    list-style: none;
    margin: 0;
    padding: 1rem;

    > li {
      border-bottom: 1px solid #000;
      text-align: center;
      position: relative;
      display: inline-block;
      padding: 0.5rem 0;
    }
  }
}

.header-right-div a:hover {
  font-weight: bold;
}

.header-right-div > nav > ul > li > a:hover + .sub-menu {
  display: block;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  opacity: 1;
  visibility: visible;
}

.header-right {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 4rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > a {
    align-items: center;
    justify-content: center;
  }
}

.container {
  display: flex;
  align-items: center;
  height: 100%;
}

.box {
}

.fa {
  font-size: 2rem;
}

@media only screen and (min-width: 900px) {
  .header-container > div:nth-child(1) > nav {
    display: none;
  }

  .list-icon {
    display: block;
  }
}
</style>
