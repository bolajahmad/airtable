import styled from 'styled-components';


export const MainComponentStyles = styled.main`
  display: block;
  padding: 2em;

  .crumb {
    color: #778699;
  }
  
  .main {
    margin-top: 1.5em;

    & > * + * {
      margin-top: 1em;
    }

    .grid.col-5 {
      grid-template-columns: repeat(5, 18em);
      grid-gap: 10px;
    }

    .main_content {
      display: flex;

      aside {
        margin-top: 1.5m;
        width: 18em;

        .sidebar {
          .title {
            display: flex;
            align-items: center;
            margin-bottom: 1.5em;

            span {
              padding: 0 1em;
            }
          }

          .sidebar_summary {
            padding: 1em;
            padding-bottom: 1.5em;
            margin-bottom: 1.5em;
            background-color: white;
            box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
            border-radius: 6px;

            .list {
              & > * + * {
                margin-top: 0.5em;
              }

              .list_item {
                display: flex;
                align-items: center;

                &.link {
                  color: #5771EE;
                  text-decoration: underline;
                }

                span {
                  padding: 0 1em;
                }
              }
            }
          }

          .sidebar_history {
            padding: 1em 1em 1.5em;

            .list {
              & > * + * {
                margin-top: 1.25em;
              }

              .list_item {
                color: #747474;

                p {
                  color: #A1AACE;
                  margin-top: 0.75em;
                }
              }
            }
          }
        }
      }
    }
  }
`;