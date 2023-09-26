function scrollNav () {
  let fullHeight = document.getElementsByTagName('html')[0].offsetHeight;
  let section = document.getElementsByClassName('mainSection');
  let scrollSection = document.getElementsByClassName('scrollSection');
  scrollSection[0].style.minHeight =
    Math.round(
      (section[0].offsetHeight+200) /
      fullHeight*1000
    ) /
    10 +'vh';
  scrollSection[1].style.minHeight =
    Math.round(
      (section[1].offsetHeight+200) /
      fullHeight*1000
    ) /
    10 +'vh';
  scrollSection[2].style.minHeight =
    Math.round(
      (section[2].offsetHeight+200) /
      fullHeight*1000
    ) /
    10 +'vh';
}
