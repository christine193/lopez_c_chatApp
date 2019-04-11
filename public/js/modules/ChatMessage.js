export default {
	props: ['msg'],

	template: `
        <p class="animated fadeIn new-message" :class="{ 'my-message' : matchedID }">
            <span>{{msg.message.name}} says</span>
            {{msg.message.content}}
        </p>
    `,

	data: function () {
		return {
			matchedID: this.$parent.socketID == this.msg.id
		}
	}
}