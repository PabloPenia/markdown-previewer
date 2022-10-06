import './icon.styles.scss'
import Sprite from './icon.sprite.svg'

/** Props for {@link Icon} */
type IconProps = {
	/** Name of symbol Id from a svg sprite without the # */
	id: string
	/** a modifier for default className. Ussually for applying different sizing */
	size?: 'smaller' | 'small' | 'big' | 'bigger'
}
/**
 * Renders a responsive Icon from an SVG symbol.
 * Requires the icon className from Sass codebase: /SASS_ROOT/components/_icons.scss.
 * Requires an SVG Sprite with symbols.
 * Viewbox from symbol {@link id} should represent a square, otherwise styling is required.
 * Edit sizing: width = css width prop. height = css padding-top prop.
 * Some sizing presets for square viewbox can be setted through {@link size}
 * @author Pablo Peña
 * @param {IconProps} props
 * @category Component
 * @example A button with class
 * ```tsx
 * <Icon id="mySymbolId" />
 * <Icon id="mySymbolId" size="smaller" />
 * // renders
 * <span className="icon">
 * <svg>
 * 		<use xlinkHref="sprite.svg#mySymbolId" />
 * </svg>
 * </span>
 *
 * <span className="icon smaller">
 * 	<svg>
 * 		<use xlinkHref="sprite.svg#mySymbolId"  />
 * 	</svg>
 * </span>
 * ```
 */
function Icon({ id, size }: IconProps) {
	const classes = size ? 'icon ' + size : 'icon'
	return (
		<span className={classes}>
			<svg>
				<use xlinkHref={`${Sprite}#${id}`} />
			</svg>
		</span>
	)
}

export default Icon
