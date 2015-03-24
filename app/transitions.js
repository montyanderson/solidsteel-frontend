export default function(){

  console.log('i am here');

  this.transition(
    this.debug(),
    //this.fromRoute('helpers-documentation.liquid-outlet.index'),
    this.toRoute('about'),
    this.use('fade'),
    this.reverse('fade')
  );

}