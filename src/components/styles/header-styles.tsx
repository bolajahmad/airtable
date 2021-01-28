import styled from 'styled-components';


export const HeaderComponentStyles = styled.header`
  position: relative;
  max-width: 100vw;

  .navbar {
    display: flex;
    font-size: 1rem;
    padding: 0 1.5em;
    box-shadow: inset 0px -1px 0px rgba(220, 225, 231, 0.572143);

    .logo_wrapper {
      padding: 1em 0;

      .logo {
        display: inline-block;
        vertical-align: middle;
      }

      h1 {
        display: inline-block;
        font-size: 1rem;
      }
    }

    nav {
      margin-left: 3em;

      .nav {
        & > * + * {
          margin-left: 2em;
        }

        .nav_item {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          color: #778699;
          cursor: pointer;
          font-weight: bold;
          padding: 1em 0.75em 0;

          span {
            padding-left: 0.75em;
          }

          &.selected {
            background-color: #DEEFFF;
            color: #006FD6;
            border-bottom: 4px solid currentColor;
            padding-bottom: 1em;
          }
        }
      }
    }

    div.last {
      margin-left: auto;
      color: #72809D;
      padding: 0.75em 1em 0;

      .nav_menu {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 20em;

        label {
          width: 13em;
          position: relative;

          input {
            height: 2.5em;
            padding: 1em;
            padding-left: 2em;
            background-color: #FFFFFF;
            border: 1px solid #DCE1E7;
            border-radius: 4px;
          }

          .icon {
            position: absolute;
            left: 0.5em;
            top: 0.75em;
            display: inline;
            color: inherit;
          }
        }

        .profile {
          position: relative;

          &::after {
            content: '';
            display: inline-block;
            position: absolute;
            top: 50%;
            right: -1em;
            border: 5px solid;
            border-color: #72809D transparent transparent;
          }

          .circle {
            width: 2em;
            height: 2em;
            border-radius: 50%;
            background-color: #D8D8D8;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    .navbar {
      .logo_wrapper {
        h1 {
          display: none;
        }
      }

      nav {
        .nav {
              max-width: 7em;
              height: 100%;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              overflow: scroll;

              .nav_item {
                padding-bottom: 1em;
              }
        }
      }
    }
  }

  @media (max-width: 500px) {
    .navbar {
      div.last {
        .nav_menu {
          width: 7em;
          label {
            display: none;
          }
        }
      }
    }
  }
`;