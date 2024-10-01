<template>
    <div class="container">
        <div class="row justify-content-around align-items-center p-4">
            <div class="col-md-4">
                <img src="/img/fotoprofilo.jpeg" alt="" class="profile animate__animated animate__fadeInLeft">
            </div>
            <div class="col-md-6 animate__animated animate__fadeInRight description text-center mt-5">
                <div class="text-orange">SU DI ME</div>
                <span class="marks">"</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic consequuntur, consequatur aut, sit,
                repellat dicta assumenda placeat omnis unde aspernatur explicabo temporibus quaerat. Voluptates in amet
                saepe vitae fuga quasi minima et voluptate, officiis voluptatibus sunt deserunt tempore voluptatem!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum vero eius placeat. Necessitatibus aliquam
                amet commodi nostrum, nam eveniet reprehenderit obcaecati quam facere quis autem quos quaerat ipsam
                nesciunt? Rerum esse expedita modi aliquam vel incidunt placeat corporis molestiae deleniti.
                <span class="marks">"</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';


.profile {
    box-shadow: 0 8px 16px $orange;
    border-radius: 20px;
}

.description {
    color: white;
    font-weight: 600;
    font-size: 18;
    line-height: 30px;
}

.marks{
    font-size: 35px;
    color: $orange;
}

.text-orange {
    font-size: 22px;
    font-weight: 700;
    color: $orange;
}
</style>