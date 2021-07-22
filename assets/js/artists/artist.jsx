import {render, unmountComponentAtNode} from 'react-dom'
import React, {useEffect} from 'react'
import {usePaginatedFetch} from "./hooks";
import {Icon} from "../components/Icon";

function Artists() {
    const {items: artists, load, loading, count, hasMore} = usePaginatedFetch('/api/artists')

    useEffect(() => {
        load()
    }, [])

    const element = (<div>
        <Title count={count}/>
        {artists.map(a => <Artist key={a.id} artist={a} /> )}
        {hasMore && <button disabled={loading} className="btn btn-primary" onClick={load}>Charger plus</button> }
    </div>)
    return element
}

const Artist = React.memo(({artist}) => {
    return <div className="row artist-detail">
        <h4 className="col-sm-3">
            <strong>{artist.name}</strong>
        </h4>
        <div className="col-sm-9">
            nombre de fans <p><strong> {artist.nbFan}</strong></p>
        </div>

    </div>
})

function Title({count}) {
    return <h3>
        <Icon icon="artists"/>
        {count} Artiste{count > 1 ? 's' : ''}
    </h3>
}

class ArtistsElement extends HTMLElement {
    connectedCallback() {
        render(<Artists/>, this)
    }

    disconnectedCallback()
    {
        unmountComponentAtNode(this)
    }
}

customElements.define('artists-element', ArtistsElement)