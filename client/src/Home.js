import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
Button,
Container,
Divider,
Input,
Grid,
Header,
Icon,
Image,
List,
Menu,
Responsive,
Segment,
Sidebar,
Visibility,
Popup
} from 'semantic-ui-react'

const users = [
{
name: 'Leonard Bogdonoff',
bio: 'Software engineer contractor at Google, working on fonts.google.com.',
avatar: 'http://1.gravatar.com/avatar/d711b926b0d02b05c728b772f9d4c394?size=200px',
}
]

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
const isSSR = typeof window === 'undefined'

return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
* such things.
*/
const HomepageHeading = ({ mobile }) => (
<Container text style={{
    textAlign: 'left'
  }}>
  <Header as='h1' content='This is Public Art' inverted style={{
        fontSize: mobile ? '2em' : '3em',
        fontWeight: '800',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '2em',
      }} />
  <Header as='h2' content='Public Art is a project to preserve street art online for the future; making it searchable and citable.'
    inverted style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }} />
  <Header as='h2' content='Help build the genealogy of street art.' inverted style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }} />
  <Grid stackable verticalAlign='middle'>
    <Grid.Row>
      <Grid.Column width={10}>
        <Header style={{
          marginTop: mobile ? '0.5em' : '1em',
          marginBottom: mobile ? '0.5em' : '1.5em',
        }}
          inverted as='h3'>Enter your email to get pleasantly infrequent updates, on new blog posts and releases.</Header>
        <Button href="https://publicart.us8.list-manage.com/subscribe?u=594b0242335ef8b4da3200914&id=ab06399a22"
              as='a' size='large' color='orange'>
              Subscribe
            </Button>
      </Grid.Column>
      <Grid.Column width={6}>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Container>
)

HomepageHeading.propTypes = {
mobile: PropTypes.bool,
}

/* Heads up!
* Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
* It can be more complicated, but you can create really flexible markup.
*/
class DesktopContainer extends Component {
state = {}

hideFixedMenu = () => this.setState({ fixed: false })
showFixedMenu = () => this.setState({ fixed: true })

render() {
const { children } = this.props
const { fixed } = this.state

return (
<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
  <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
    <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em', backgroundImage: 'url(/maps.jpg)', backgroundColor: '#111', backgroundSize: 'cover' }}
      vertical>
      <Menu fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size='large'>
        <Container>
          <Menu.Item as='a'>
            <Image src="/logo-transparent.png" style={{width: '40px'}}></Image>
          </Menu.Item>
        </Container>
      </Menu>
      {/* <Menu fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size='large'>
        <Container>
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item position='right'>
            <Button as='a' inverted={!fixed}>
              Log in
            </Button>
            <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
              Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu> */}
      <HomepageHeading />
    </Segment>
  </Visibility>

  {children}
</Responsive>
)
}
}

DesktopContainer.propTypes = {
children: PropTypes.node,
}

class MobileContainer extends Component {
state = {}

handleSidebarHide = () => this.setState({ sidebarOpened: false })

handleToggle = () => this.setState({ sidebarOpened: true })

render() {
const { children } = this.props
const { sidebarOpened } = this.state

return (
<Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
  {/* <Sidebar as={Menu} animation='push' inverted onHide={this.handleSidebarHide} vertical visible={sidebarOpened}>
    <Menu.Item as='a' active>
      Home
    </Menu.Item>
    <Menu.Item as='a'>Work</Menu.Item>
    <Menu.Item as='a'>Company</Menu.Item>
    <Menu.Item as='a'>Careers</Menu.Item>
    <Menu.Item as='a'>Log in</Menu.Item>
    <Menu.Item as='a'>Sign Up</Menu.Item>
  </Sidebar> */}

  <Sidebar.Pusher dimmed={sidebarOpened}>
    <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
      <Container>
        <Menu inverted pointing secondary size='large'>
          <Menu.Item>
            {/* <Icon name='sidebar' /> */}
            <Image src="/logo-transparent.png" style={{width: '40px'}}></Image>
          </Menu.Item>
          <Menu.Item position='right'>
            {/* <Button as='a' inverted>
              Log in
            </Button>
            <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
              Sign Up
            </Button> */}
          </Menu.Item>
        </Menu>
      </Container>
      <HomepageHeading mobile />
    </Segment>

    {children}
  </Sidebar.Pusher>
</Responsive>
)
}
}

MobileContainer.propTypes = {
children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
<div>
  <DesktopContainer>{children}</DesktopContainer>
  <MobileContainer>{children}</MobileContainer>
</div>
)

ResponsiveContainer.propTypes = {
children: PropTypes.node,
}

const HomepageLayout = () => (
<ResponsiveContainer>
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Grid container stackable verticalAlign='top'>
      <Grid.Row>
        <Grid.Column width={3}>
          <Header as='h3' style={{ fontSize: '2em', marginBottom: '2.5rem' }}>
            Team
          </Header>
          <div>
            {users.map(user => (
            <a href="https://twitter.com/rememberlenny" target="_blank">
              <Popup key={user.name} position='bottom left' trigger={<Image size='small' src={user.avatar} avatar />}
              header={user.name}
              content={user.bio}
              />
            </a>
            ))}
          </div>
        </Grid.Column>
        <Grid.Column floated='right' width={13}>
          <Header as='h3' style={{ fontSize: '2em', marginBottom: '2.5rem' }}>
            Let's meet
          </Header>
          <p style={{ fontSize: '1.33em', marginBottom: '2rem' }}>
            Share your thoughts at lenny@publicart.io 🚀
          </p>
          <Segment>
            <Grid container columns={3} relaxed stackable>
              <Grid.Row>
                <Grid.Column>
                  <p style={{ fontSize: '1.33em' }}>
                    Street Art Lovers
                  </p>
                  <p style={{ color: 'rgba(0, 24, 42, 0.5)'}}>
                    Do you see street art for more than just urban art?
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <p style={{ fontSize: '1.33em' }}>
                    Machine Learning Engineers
                  </p>
                  <p style={{ color: 'rgba(0, 24, 42, 0.5)'}}>
                    Are you interested in using machine learning for creative expression?
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <p style={{ fontSize: '1.33em' }}>
                    Digital Humanities Researchers
                  </p>
                  <p style={{ color: 'rgba(0, 24, 42, 0.5)'}}>
                    Have you used software or technology for analyzing historical context of art or literature?
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <p style={{ fontSize: '1.33em' }}>
                    Digital Humanities Researchers
                  </p>
                  <p style={{ color: 'rgba(0, 24, 42, 0.5)'}}>
                    Reach out if you are doing anything in the digital humanities!
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <p style={{ fontSize: '1.33em' }}>
                    Urban Planners and Activists
                  </p>
                  <p style={{ color: 'rgba(0, 24, 42, 0.5)'}}>
                    Do you get excited about quantitative urban data?
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>

  <Segment style={{ padding: '8em 0em' }} vertical>
    <Container text>
      <Header as='h3' style={{ fontSize: '2em' }}>
        Our supporters
      </Header>
      <Segment>
        <Grid columns={2} divided container doubling stackable>
          <Grid.Column>
            <Header as='h2' content='Emergent Ventures' style={{
              fontWeight: 'normal',
              height: '50px',
              lineHeight: '50px',
            }} />
            <p>
              Emergent Ventures, a new fellowship and grant program from the Mercatus Center, seeks to support
              entrepreneurs and brilliant minds with highly scalable, “zero to one” ideas for meaningfully improving
              society.</p>
            <Button href="https://marginalrevolution.com/marginalrevolution/2018/11/emergent-ventures-grant-recipients.html"
              as='a' size='small'>
              Read More
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Image size='medium' src={'/pioneer.png'} style={{width: 'auto', marginBottom: '10px', height: '50px'}} />
            <p>
              Pioneer funds ambitious people around the world working on interesting projects. Unlike a startup
              accelerator, this is focused on small projects, not companies. A project could be anything -- open source
              work, research in physics or biology, or creating art.
            </p>
            <Button href="https://pioneer.app/blog/meet-the-pioneers/" as='a' size='small'>
              Read More
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  </Segment>

  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={16} style={{textAlign: 'center'}}>
            <a href="mailto:lenny@publicart.io" target="_blank">
              <Header as='h4' content='Email' inverted style={{
                    display: 'inline',
                    fontWeight: 'normal',
                    marginRight: '6px',
                  }} />
            </a>
            <a href="https://twitter.com/rememberlenny" target="_blank">
              <Header as='h4' content='Twitter' inverted style={{
                  display: 'inline',
                  marginLeft: '6px',
                  fontWeight: 'normal',
                }} />
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
</ResponsiveContainer>
)

export default HomepageLayout