import { StoryOptions } from 'src/types'
import { defineComponent } from 'vue-demi'
import h from "../utils/h-demi"

export default defineComponent({
  props: {
    story: {
      type: Object as () => StoryOptions,
      required: true
    }
  },
  render() {
    const style = {
      width: "100%",
      height: "100%",
      border: "none",
      "pointer-events": "none",
      loading: "eager"
    }

    const params = {
      style,
      domProps: {
        src: this.story.url,
        type: 'text/html',
        loading: 'eager'
      },
    }

    return h('iframe', params)
  }
})