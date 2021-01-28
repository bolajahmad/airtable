import styled from 'styled-components';


export const MainComponentStyles = styled.main`
  display: block;
  padding: 2em;

  .crumb {
    color: #778699;
  }
  
  .main {
    margin: 0 auto;
    margin-top: 1.5em;
    max-width: 1300px;

    & > * + * {
      margin-top: 1em;
    }

    .grid.col-5 {
      grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
      grid-gap: 10px;
    }

    .main_content {
      display: flex;

      aside {
        margin-top: 1.5em;
        width: 18em;
        min-width: 15em;

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
                position: relative;
                padding: 0 1em 1em;
                margin: 0;
                border-left: 1px dashed currentColor;

                :last-child {
                  border: none;
                }

                .bullet {
                  position: absolute;
                  font-size: 2.5rem;
                  top: -0.6em;
                  left: -0.22em;
                }

                p {
                  color: #A1AACE;
                  margin-top: 0.75em;
                }
              }
            }
          }
        }
      }

      .content_table {
        flex: 1;
        margin-left: 1em;
        background: #FFFFFF;
        box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
        border-radius: 6px;
      }
    }
  }

  @media (max-width: 1024px) {
    .main {
      .main_content {
        display: flex;
        flex-direction: column;

        aside {
          width: 100%;

          .sidebar {
            display: flex;
            flex-wrap: wrap;

            & > div {
              flex: 1;
              min-width: 15em;
            }
          }
        }
      }
    }
  }
`;