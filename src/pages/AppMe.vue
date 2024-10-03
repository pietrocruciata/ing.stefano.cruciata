<template>
    <section class="me">
        <div class="col-md-4 text-center d-md-none mt-5">
                <img src="/img/fotoprofilo.jpeg" alt="" class="profile animate__animated animate__fadeInRight">
            </div>
        
        <div class="row justify-content-around align-items-center p-4 mt-2 mt-md-5 ">
            <div class="col-md-6 animate__animated animate__fadeInLeft description text-center  ms-md-5">
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
            <div class="col-md-4 text-center d-none d-md-block">
                <img src="/img/fotoprofilo.jpeg" alt="" class="profile animate__animated animate__fadeInRight">
            </div>
            
        </div>
   
    </section>
    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';

.me{
    // margin-top: 50px;
    @media (max-width: 991px) {
    margin-top: 0;
  }
}

.profile {
    box-shadow: 0 8px 16px $black;
    border-radius: 20px;
    width: 350px;
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