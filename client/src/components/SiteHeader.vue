<template>
    <header>
      <div class="header-container">
        <div>
          <img class="logo" src="images/logo.png"/>
        </div>
        <div>
          <nav>
            <ul>
              <li><a href="#">킨더플레이룸</a>
                <div class="sub-menu">
    <ul>
      <li>Menu 1</li>
      <li>Menu 2</li>
      <li>Menu 3</li>
    </ul>
  </div>
              </li>
              <li><a href="#">프랜차이즈</a>
                <div class="sub-menu">
    <ul>
      <li>Menu 1</li>
      <li>Menu 2</li>
      <li>Menu 3</li>
    </ul>
  </div>
              </li>
              <li><a href="#">News</a>
                <div class="sub-menu">
    <ul>
      <li>Menu 1</li>
      <li>Menu 2</li>
      <li>Menu 3</li>
    </ul>
  </div>
              </li>
              <li><a href="#">디자인</a>
                <div class="sub-menu">
    <ul>
      <li>Menu 1</li>
      <li>Menu 2</li>
      <li>Menu 3</li>
    </ul>
  </div>
              </li>
            </ul>
          </nav>
          <div class="header-right">
            <div class="box yellow"><a href="#"><i class="fa fa-comments"></i></a></div>
            <div class="box blue"><a href="#"><i class="fa fa-envelope"></i></a></div>
            <div class="box green"><a href="#"><i class="fa fa-naver"></i></a></div>
          </div>
        </div>
      </div>
    </header>
</template>

<style>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 14rem;
}

.header-container > div:nth-child(1) {
  .logo {
    margin-left: 4rem;
    width: 8rem;
    height: auto;
  }

  nav {
    display: flex;
    justify-content: space-between;

    > ul {
      display: flex;
      flex-direction: row;

      > li {
        position: relative;
        display: inline-block;
        padding: 1rem;

        > a:hover {
          font-weight: bold;
        }

        .sub-menu {
          display: none;
          position: absolute;
          top: 100%;
          background-color: #fff;
          border: 1px solid #000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease-in-out;
          transform: translateY(-10px);

          > ul {
            background-color: white;
            border: 1px solid black;
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

        &:hover .sub-menu {
          display: block;
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          animation: all 0.5s ease-in-out;
        }

        > ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: space-between;

          > li {
            > a {
              display: block;
              padding: 1rem;
              text-decoration: none;
              color: black;
            }
          }
        }
      }
    }
  }
}

.header-container > div:nth-child(2) {
  display: flex;
  height: 100%;
  align-items: center;
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

.box {}

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
