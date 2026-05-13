

<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import baller_one from '$lib/assets/baller_one.png';
    import baller_two from '$lib/assets/baller_two.png';
    import Footer from "$lib/components/Footer.svelte";
    import end_one from "$lib/assets/end_one.png"
    import end_two from "$lib/assets/end_two.png"
    import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>

<NavBar/>

<div class="xl:px-20 px-5 mt-20">

    <div class="flex md:flex-row flex-col gap-5 items-center">
        <div class="col-md-6 col-12 flex flex-col  justify-end items-start"  >
    <span class="xl:text-6xl md:text-3xl text-4xl grd_one font-bold">ABOUT</span>
    <br/>
    <span class="xl:text-6xl md:text-3xl text-4xl grd_one mt-1 mx-20 font-bold">PROJECT</span>
</div>
    <div class="col-md-6 col-12"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat amet voluptatibus quidem itaque voluptatum dicta, tempora laborum minima reprehenderit quia porro corporis nulla sequi necessitatibus ducimus repellendus expedita iusto animi.

    </div>
</div>



</div>

<div class="bg_grd_one mt-40">

   <div class="flex md:flex-row flex-col justify-center gap-5 px-10 py-5 items-center">
    <div class="">
        <img class="hidden md:block" src={baller_one} alt="Baller One">
    </div>
    <div class="col-lg-7 col-12 bg-dark px-5 py-15 text-sm rounded-xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem itaque assumenda exercitationem nam ratione, debitis cupiditate quod odio fugit ullam enim pariatur architecto repellat autem rem! Labore, perspiciatis commodi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores obcaecati porro sint harum blanditiis sed! Temporibus aliquid amet ipsum dolores repudiandae praesentium assumenda, omnis non, exercitationem unde, consequatur ab.
    </div>
    <div>
        <img class="hidden md:block"  src={baller_two} alt="Baller Two">
    </div>
</div>




</div>
<div class="xl:px-30 px-5 mt-20">
    <div class="flex md:flex-row flex-col gap-2 justify-center items-start ">
        <div class="col-md-5 hidden md:flex"><img class="md:h-96 md:w-64  " src={end_one} alt=""></div>
        <div class="col-md-7 flex flex-col gap-2 mt-2">
           
                <div class=""><img src={end_two} alt=""></div>
            
            <div class="text-xs mt-2 md:pr-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis amet quis molestias veniam nobis tempore quibusdam pariatur sunt, voluptatum facilis reprehenderit impedit similique quam qui in consequuntur ea nisi optio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis amet quis molestias veniam nobis tempore quibusdam pariatur sunt, voluptatum facilis reprehenderit impedit similique quam qui in consequuntur ea nisi optio.</div>
        </div>


    </div>
</div>

<section class="faqs xl:px-30 px-5 mt-20" id="faqs">


    <h1 class="text-center text-2xl font-bold">

        FAQS
        
    </h1>
   

    <div class="flex justify-center mt-5">
       <Accordion.Root type="single" class="w-full sm:max-w-[70%]" value="item-1">
  <Accordion.Item class value="item-1">
    <Accordion.Trigger class=""><span class="grd_one">Product Information</span></Accordion.Trigger>
    <Accordion.Content class="flex flex-col gap-4 text-balance grd_one border-0">
      <p class="text-xs">
        Our flagship product combines cutting-edge technology with sleek design.
        Built with premium materials, it offers unparalleled performance and
        reliability.
      </p>
      <p class="text-xs">
        Key features include advanced processing capabilities, and an intuitive
        user interface designed for both beginners and experts.
      </p>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item class value="item-2">
    <Accordion.Trigger class=""><span class="grd_one">Shipping Details</span></Accordion.Trigger>
    <Accordion.Content class="flex flex-col gap-4 text-balance grd_two">
      <p class="text-xs">
        We offer worldwide shipping through trusted courier partners. Standard
        delivery takes 3-5 business days, while express shipping ensures
        delivery within 1-2 business days.
      </p>
      <p class="text-xs">
        All orders are carefully packaged and fully insured. Track your shipment
        in real-time through our dedicated tracking portal.
      </p>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item class value="item-3">
    <Accordion.Trigger class=""><span class="grd_one">Return Policy</span></Accordion.Trigger>
    <Accordion.Content class="flex flex-col gap-4 text-balance grd_one">
      <p class="text-xs">
        We stand behind our products with a comprehensive 30-day return policy.
        If you&apos;re not completely satisfied, simply return the item in its
        original condition.
      </p>
      <p class="text-xs">
        Our hassle-free return process includes free return shipping and full
        refunds processed within 48 hours of receiving the returned item.
      </p>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>

    </div>
</section>
<Footer/>