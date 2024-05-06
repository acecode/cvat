
## 基本概念

| i18n                                        | Internationalization 国际化的缩写<br>程序中一般是 `i18next` 的 对象实例                                                                                       |
| ------------------------------------------- |----------------------------------------------------------------------------------------------------------------------------------------------|
| [i18next](https://www.i18next.com/)包        | 管理数据，提供翻译函数，一般简写成`t`                                                                                                                         |
| [react-i18next](https://react.i18next.com/) | 提供 `React` 组件                                                                                                                                |
| 翻译函数 t                                      | 根据提供的 文本或路径，在资源中查找翻译结果<br>最后返回翻译结果<br>有时也可以插入变量                                                                                              |
| key                                         | 翻译函数传入的路径<br>为了方便和兼容忘记翻译的情况，也可以直接传源文本                                                                                                        |
| `namespace`(`ns`)<br>命名空间                   | 拆分资源，避免相同的`key`冲突<br>`i18next` 的默认 ns 是 translation                                                                                          |
| 翻译资源文件                                      | 存储为`src/locales/${language}/${namespace}.js`<br>内部为字典结构<br>language 为不同语言                                                                    |
| JSX 格式                                      | 源代码中形似 `<Foo>...</Foo><Bar/>` 的代码，表示一个组件或元素                                                                                                  |
| JSX 节点的属性                                   | `<Foo title="x">` 中类似 `title="x"` 的部分，表示对这个元素的配置                                                                                             |
| JSX 节点的子节点                                  | `<Foo><Bar/></Foo>` 成对的 `<Foo></Foo>` 标签中间的部分<br>`<Text>Hello</Text>` 放入的文本也可以称为 `Text 元素` 的内部文本<br><br>子节点也可能是多个元素`<Foo><Bar/><Tar/></Foo>` |
| `<> </>`                                    | 包裹多个子元素                                                                                                                                      |


## 技术栈与文档 Tech Stacks
* [i18next](https://www.i18next.com/)  国际化程序包
* [i18next-browser-languageDetector](https://github.com/i18next/i18next-browser-languageDetector)  从浏览器环境检测应该使用的语言
* [i18next-resources-to-backend](https://github.com/i18next/i18next-resources-to-backend)  加载资源文件导入到 `i18next` 中
* [react-i18next](https://react.i18next.com/)  `React` 封装 相关组件
## 简单示例流程

1. `src/i18n.ts` 加载 `i18next` 程序包，关联相关插件， 指定资源文件位置
2. 主程序中加载 `i18n.ts`， `i18next` 加载完成后，进入正式流程
3. 某个组件中有一段代码需要处理，这里假设是 `JSX` 里的 内部文本
  ```jsx
  <h1>Hello</h1>
  ```
3. 添加(包裹)翻译函数t,
  ```jsx
  <h1>{t('Hello')}</h1>
  ```
4. 看一下外层定义组件方式，这里假设是简单函数返回
   ```jsx
   function FooPage() {
	   return <h1>{t('Hello')}</h1>
   }
```
5. 引入`react-i18next`的 `useTranslation` hook;
   ```jsx
   function FooPage() {
	   const { t } = useTranslation();
	   return <h1>{t('Hello')}</h1>
   }
```
6. 在文件头部 引入 `react-18next`
   在第一梯队的末尾
   ```jsx
   import React from 'react';
   import { useTranslation } from 'react-i18next';

   import Foo from 'foo';
```
7. 补充资源文件
   ```diff
// src/locales/en/translation.js
export default {
+	   'Hello': 'Hello',
}

// src/locales/zh-CN/translation.js
export default {
+	   'Hello': '你好',
}
```

## 修改源代码方式

### JSX

#### 属性

```diff
<Spin
-   tip='foo'
+   tip={t('foo')
/>
```

#### 内容

```diff
<Text>
-   Foo
+   {t('Foo')}
</Text>
```
#### 复杂内容

使用 `react-i18next` 的 `Trans` 组件
1. 包含其他 `JSX标签`，并且需要一起翻译

```diff
+ import { useTranslation Trans } from 'react-i18next';

// 具体意义，稍后解释
+ const {t: tHeaderPlayerSettings} = useTranslation('header', {keyPrefix: 'Settings' });

<Text type='secondary'>
+    <Trans t={tHeaderPlayerSettings} i18nKey='PlayerStepTips'>
        Number of frames skipped when selecting
        <Icon component={BackJumpIcon} />
        or
        <Icon component={ForwardJumpIcon} />
+    </Trans>
</Text>
```

```javascript
// locales
// en
PlayerStepTips: 'Number of frames skipped when selecting <0/> or <1/>',
// zh-cn
PlayerStepTips: '使用 <1/> 或 <3/> 时跳过的帧数',
```
* 可以通过查看 `console` `missingKey` 错误信息 来获取默认翻译
* `<Trans t>` 可以指定`翻译函数`，省略 `ns` 配置

#### Class 组件

类似如下代码，需要修改的 JSX 相关内容在 `class` 定义中
```jsx
import React from 'react';
class FooPage extends React.PureCompoment {

	renderBar() {
		return (
			<Text>Test</Text>
		)
	}

	render() {
		return (
			<>
				<Text>Hello</Text>
				{renderBar()}
			</>
		)
	}
}
```

需要使用 `react-i18next` 中的 `Translation`

```diff
import React from 'react';
+ import { Translation } from 'react-i18next';
...
	<>
-		<Text>Hello</Text>
+       <Translation>
+			{(t) => <Text>t(Hello)</Text>}
+		</Translation>
		{renderBar()}
	</>
```

详见[Translation (render prop)](https://react.i18next.com/latest/translation-render-prop)
### js/ts 代码

```diff
Modal.confirm({
-	title: 'Confirm Delete',
+	title: t('Confirm Delete'),
-	okText: 'Delete'
+	okText: t('Delete'),
})
```

## 翻译函数命名

一般携带NS
再附加（表示）key前缀的字符串

```jsx
const { t } = useTranslation()
const { tError } = useTranslation('error')

const { tType } = useTranslation(undefined, { keyPrefix: 'type' })
// 这里 undefined 表示默认 ns

const { tHeaderPlayerSettting } = useTranslation('header', { keyPrefix: 'playerSetting' })


```

```jsx
<Translation>
	{(t) => t('Hello')}
</Translation>
<Translation ns="error">
	{(tError) => tError('Hello')}
</Translation>
```

## 语句位置

import 语句， 文件头部第一组 import 结尾

```diff
import React from 'react';
+ import { useTranslation } from 'react-i18next';

import Header from 'components/header';
```

useTranslation hook语句，组件函数第一组尾部
```diff
function Header {
	const [title] = setState('xxx');
+   const { t } = useTranslation()

	return <header>{title}</header>;
}
```

### locale文件(对照表)
添加新 locale 文件后，
如 `src/locale/en/filter.js` 后，
更新 `src/i18n.ts` `ns` 数组，
这样这个文件才会在启动时自动加载

```diff
// src/i18n.ts
ns: [
    'translation',
    'projects',
    'task',
    'auth',
+	'filter',
],
```
