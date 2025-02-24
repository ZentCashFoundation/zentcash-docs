import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <a href="/docs/learn/about-zent-cash">Learn</a>,
    Svg: require('@site/static/img/undraw_docs.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: <a href="/docs/use/getting-started">Use</a>,
    Svg: require('@site/static/img/undraw_use.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: <a href="/docs/mine/mining">Mine</a>,
    Svg: require('@site/static/img/undraw_mining.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: <a href="/docs/build/building-with-zent-cash">Build</a>,
    Svg: require('@site/static/img/undraw_build.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: <a href="/docs/exchange/exchanges">Exchange</a>,
    Svg: require('@site/static/img/undraw_money.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: <a href="/docs/learn/Frequently-Asked-Questions">FAQ</a>,
    Svg: require('@site/static/img/undraw_questions.svg').default,
    description: (
      <>

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
