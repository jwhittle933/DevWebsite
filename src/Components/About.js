import React from 'react'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const About = () => {
  return (
    <div className="wrapper about">
      {'About Me'.split('').map((l, i) => (
        <span className="view-header-item" data-letter={l} key={i}>
          {l}
        </span>
      ))}
      <div className="about-content">
        <p>
          I'm originally from Sumter, SC, where the summers are hot and the
          winters are short. I've always been a jack of all trades, and over the
          years I've gotten into skateboarding, paintball, model car building,
          carpentry, cars, automotive sound systems, and music. The last one
          stuck more than the others. I started playing guitar at 11, and by 17
          I was playing in various bands and groups. I also play bass, drums,
          piano, and used to be able to play the Sax, but those days may be long
          behind me. Guitar of choice: Gibson Les Paul. I also grew up an avid
          rifleman, and my dad is a gun collector of sorts.
        </p>
        <p>
          I'm a proud graduate of Clemson University (2013). Initially I entered
          the engineering program, having done engineering prep for two years in
          high-school. After starting down the road toward civil engineering, I
          soon realized that this path wasn't for me. So I swapped to Philosophy
          with a minor in guitar performance. In Philosophy, I studied classical
          and contemporary philosophy, metaphysics, existentialism, and even
          philosophy of film (yep, that exists). While at Clemson, I was an
          active participant in FCA (Fellowship of Christian Athletes), and
          played guitar for the chapter's in-house band for two years. I was
          also a member of Crosspoint Church Clemson, where I later worked for 2
          years prior to moving to Kentucky.
        </p>
        <p>
          In December 2018 I graduated from The Southern Baptist Theological
          Seminary with a Master of Divinity, focusing on Ancient Near Eastern
          Languages and Linguistics. In the course of my study, I learned
          Classical Hebrew, both Classical and Hellenistic Greek, Aramaic,
          Syriac, Ugaritic, a bit of Akkadian, Latin, and French. I also revived
          my German. Linguistics combined with philosphy make me a professional
          nitpicker. The original intention was to enter the pastorate, but my
          course has changed slightly since then. In January of 2019 I started
          the doctoral process by entering the Th.M (Master of Theology) under
          Dr. Peter Gentry. You can checkout my research{' '}
          <a
            className="link"
            href="https://github.com/jwhittle933/thesis-research"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </a>
          . I also regularly fill in for Dr. Gentry teaching Greek and Hebrew
          when he can't be present, and have graded for several of his courses.
          My Th.M thesis is a translation study of Old Greek Proverbs. During my
          studies I was employed by the seminary as a help desk technician,
          servicing computers and handling classroom-related tech needs.
        </p>
        <p>
          My wife (Emily) and I are originally from South Carolina, and one day
          we hope to move back. Our son, Judson, was born in January 2019. He's
          a living, breathing, indoor tornado, and we love every bit him. We are
          members at Clifton Baptist Church in Louisville, Kentucky, where I
          also serve as Deacon of Sound (or, as I've been called, the Earl of
          Audio).
        </p>
      </div>
    </div>
  )
}

export default About
