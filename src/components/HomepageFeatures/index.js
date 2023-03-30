import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fai networking',
    Svg: require('@site/static/img/undraw_having_fun_re_vj4h.svg').default,
    description: (
      <>
       Approfitta di questa opportunità per fare networking.
       Il networking può portare a nuove opportunità lavorative, partnership e amicizie durature.
      </>
    ),
  },
  {
    title: 'Contribuisci alla community',
    Svg: require('@site/static/img/undraw_web_development_0l6v.svg').default,
    description: (
      <>
        Se dovessi finire prima gli esercizi o ti senti particolarmente sicur* di un determinato argomento, considera 
        l'opportunità di aiutare i/le mentor a spiegare i concetti al resto del tuo gruppo.
      </>
    ),
  },
  {
    title: 'Sfrutta il supporto',
    Svg: require('@site/static/img/undraw_people_re_8spw.svg').default,
    description: (
      <>
        Durante tutto il percorso del bootcamp, sarai seguit* da mentor esperti/e che saranno pronti ad aiutarti in caso di difficoltà. 
        Approfitta del loro supporto per superare eventuali ostacoli e per imparare il più possibile.
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
        <h3>{title}</h3>
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
