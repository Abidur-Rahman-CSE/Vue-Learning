<template>
    <h2 class="heading">About US</h2>
    <section id="service1">
      <Card title="This is title">
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur.
          </li>
          <li>
            Lorem ipsum dolor sit aliquid placeat nobis!
          </li>
        </ul>
      </Card>
      <Card>
        <template #title>
          This is slot title
        </template>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur.
          </li>
          <li>
            Lorem ipsum dolor sit aliquid placeat nobis!
          </li>
        </ul>
      </Card>
      <Card>
        <template #icon>
          <SettingIcon width="50" />        
        </template>
      </Card>
    </section>
</template>

<script>
import Card from "@/components/Card.vue"
import { SettingIcon } from "@/components/icons";
export default {
  components: {
    Card,
    SettingIcon,
  }
}
</script>