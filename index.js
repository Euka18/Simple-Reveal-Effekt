//Holt alle Elemente, die die Klasse reveal tragen
const revealElements = document.querySelectorAll('.reveal');

//Observiert alle Reveal Elemente und schaut, ob sie im Bild sind
const revealElementObserver = new IntersectionObserver(
    entries =>
    {
        entries.forEach(entry =>
        {
            //Ist eins unser Reveal Elemente im Bild
            if(entry.isIntersecting)
            {
                //Füge die Klasse active hinzu
                entry.target.classList.add('active');
                //UnObserve, nicht mehr Observieren
                revealElementObserver.unobserve(entry.target);
            }
        });
    },
    {
        //Wenn 60% des Elementes im Bild ist, nur dann gilt es als im Bild
        threshold: .6,
    }
);

//Alle unsere Elemente werden nun vom Observer beobachtet
revealElements.forEach(el =>
{
    revealElementObserver.observe(el);
});