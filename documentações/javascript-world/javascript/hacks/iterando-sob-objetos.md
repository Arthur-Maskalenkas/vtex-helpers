# iteração sob objetos
# object.entries

```javascript
for await (let [ key, value ] of Object.entries(formAttachments)) {
			const response = await this.attachmentResolver.handle({
				key,
				value,
				itemIndex,
				orderFormId
			})

			console.log(response)
		}
```