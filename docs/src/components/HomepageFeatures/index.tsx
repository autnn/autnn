import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Template-first UI for Expo',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        autonbd gives you a shadcn-like workflow for Expo and React Native:
        install ready-made UI templates into your app, without being locked to
        Tailwind or any specific styling system.
      </>
    ),
  },
  {
    title: 'Themes and components decoupled',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Components and themes live in separate layers. Mix and match templates
        like <code>nightowl</code> or <code>grayman</code> with any theme
        tokens, so design and structure evolve independently.
      </>
    ),
  },
  {
    title: 'CLI & Expo plugin integrated',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Use the <code>@autonbd/cli</code> to scaffold config and install
        templates, while the <code>@autonbd/expo-plugin</code> keeps your Expo
        config in sync with your active template and theme.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): ReactNode {
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
