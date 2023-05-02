import * as React from "react";

// Definindo que é possivel chamar o isActive e toggleActive como função anonima, no children
interface AnyComponentProps {
  children: ((props: { isActive: boolean; toggleActive: () => void }) => React.ReactNode) | React.ReactNode;
}

const AnyComponent = ({ children }: AnyComponentProps) => {
  // props sendo passada para a função anonima que pode ser chamada no lugar do children, dentro do componente AnyComponent
  const [isActive, setIsActive] = React.useState(false);

  // props sendo passada para a função anonima que pode ser chamada no lugar do children, dentro do componente AnyComponent
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const isFunction = typeof children === 'function'

  if (isFunction) {
    return (
      <div>
        {/* Chamando os objetos passados como função anonima */}
        {children({ isActive, toggleActive })}
      </div>
    )
  }

  return (
    <div>
      <p>{children}</p>
    </div>
  )
};

const ContainerUsageFunction = () => {
  return (
    <AnyComponent>
      {({ isActive, toggleActive }) => (
        <div>
          <h1>function children</h1>

          <div>Current props is {isActive ? 'active' : 'not active'}</div>
          <button onClick={toggleActive}>Toggle isActive</button>
        </div>
      )}
    </AnyComponent>
  );
};

const ContainerUsageChildren = () => {
  return (
    <AnyComponent>
      <h1>normal children</h1>
    </AnyComponent>
  );
};


