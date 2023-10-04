export const ProductSummary = ({ product }: { product: Product.Current }) => {
  const { currentSku: { name, quantity, id, image } } = product

  return (
    <div className={'component-handleProduct container'}>
      <div className={'left-side'}>
        <p>{name}</p>
        <p>SKU ID {id}</p>
        <p>{quantity} unidades no estoque</p>


        <ButtonSeeMore product={product} />
        <ButtonGoToPDP product={product} />
      </div>

      <div className={'right-side'}>
        <img width={60} height={60} src={image} />
      </div>
    </div>
  )
}

const params: ComponentProps<typeof ProductSummary> = {

}

/*
https://stackoverflow.com/questions/43230765/typescript-react-access-component-property-types
Lookup type
With newer TS versions you can use lookup types.

type ViewProps = View['props']
Despite being very convenient, that will only work with class components.

React.ComponentProps
The React typedefs ship with an utility to extract the type of the props from any component.

type ViewProps = React.ComponentProps<typeof View>

type InputProps = React.ComponentProps<'input'>
This is a bit more verbose, but unlike the type lookup solution:

the developer intent is more clear
this will work with BOTH functional components and class components
All this makes this solution the most future-proof one: if you decide to migrate from classes to hooks, you won't need to refactor any client code.






For built-in elements, you can also use: JSX.IntrinsicElements["div"] (though you may want to use Omit<..., "ref">, if you're using ...rest in your render function) 