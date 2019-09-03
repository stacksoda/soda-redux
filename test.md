# Jest
Facebook出品的Jest自带断言等功能
## describe函数描述测试套件
``` javascript
describe('actions', () => {
    it('should ......', () => {
        // ...可以有更多it
    })
})
```
## describe中的特殊函数
``` javascript
beforeAll: 在开始测试套件开始之前执行一次
afterAll: 在结束测试套件中所有测试用例后执行一次
beforeEach: 每个测试用例在执行之前都执行一次
afterEach: 每个测试用例在执行后都执行一次
```
# 辅助工具
## 测试组件 Enzyme
若要测试React组件，需要用到Enzyme, Enzyme是由AirBnB贡献的开源项目
`npm i --save-dev enzyme enzyme-adapter-react-16`

``` javascript
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Filters} from '../../../filter/';
import Link from '../../../filter/views/link';
import {FilterTypes} from '../../../constants';

configure({ adapter: new Adapter() });
describe('filters', () => {
    it('should render three link', () => {
        const wrapper = shallow(<Filters />);
        
        expect(wrapper.contains(<Link filter={FilterTypes.ALL}> {FilterTypes.ALL} </Link>)).toBe(true);
        expect(wrapper.contains(<Link filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </Link>)).toBe(true);
        expect(wrapper.contains(<Link filter={FilterTypes.UNCOMPLETED}> {FilterTypes.UNCOMPLETED} </Link>)).toBe(true);
    })
})
```

### Enzyme支持三种渲染方式
#### shallow
只渲染顶层React组件,不渲染子组件,适合只测试React组件的渲染行为
#### mount
渲染完整的React组件包括子组件,借助模拟的浏览器环境完成事件处理功能
#### render
渲染完整的React组件，但只产生HTML，并不进行事件处理

