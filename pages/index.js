import feeds from '../data/feeds';
import Row from '../components/row';
import Hero from '../components/hero';
import Card from '../components/card';

export default() => {
  return (
    <>
      <Hero title="Pick a feed"/>
      <Row>
      {feeds.map(feed =>
        <Card
          href="/[feed]"
          as={`/${feed.slug}`}
        >
          <h3>{feed.title}</h3>
        </Card>
      )}
      </Row>
    </>
  )
}