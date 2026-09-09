import {describe, test, expect} from 'vitest'
import {render,screen} from '@testing-library/react'
import { CustomHeader } from './CustomHeader'


describe('CustomHeader', () =>{
  const title = 'Angel'

  test('should render the title correctly', () =>{
    render(<CustomHeader title={title}/>)
    expect(title)
    expect(screen.getAllByText(title)).toBeDefined()

  })

  test('should render the description when provided', () =>{
    const desc = 'xdddd'

    render(<CustomHeader title={title} description={desc}/>)

    expect(screen.getAllByText(desc)).toBeDefined()
    expect(screen.getByRole('paragraph')).toBeDefined()
    expect(screen.getByRole('paragraph').innerHTML).toBe(desc)

  })

  test('should not render description when not provided', () =>{
    // container = render()

    const {container} = render(<CustomHeader title={title}/>)

    const divElement = container.querySelector('.content-center')

    // const h1 = divElement?.querySelector('h1')
    const p = divElement?.querySelector('p')
    expect(p).toBeNull()
    // expect(h1?.innerHTML).toBe(title)
  })
})