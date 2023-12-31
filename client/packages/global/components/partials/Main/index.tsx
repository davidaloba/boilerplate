import BlockManager from './BlockManager'

const Main = ({ children, blocks, perPage }: { children; blocks?; perPage? }) => {
  return (
    <main className="">
      {children}
      {/* {blocks && (
        <BlockManager
          blocks={blocks}
          perPage={perPage || 12}
        />
      )} */}
    </main>
  )
}

export default Main
