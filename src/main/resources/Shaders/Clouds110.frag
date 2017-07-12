uniform sampler2D m_Octave0;
uniform sampler2D m_Octave1;
uniform sampler2D m_Octave2;
uniform sampler2D m_Octave3;

uniform float m_Emptiness;
uniform float m_Sharpness;

uniform vec4 m_CloudColor;

varying vec4 uv0;
varying vec4 uv1;

void main()
{

    vec4 n0 = texture2D(m_Octave0, uv0.xy);
    vec4 n1 = texture2D(m_Octave1, uv0.zw);
    vec4 n2 = texture2D(m_Octave2, uv1.xy);
    vec4 n3 = texture2D(m_Octave3, uv1.zw);
    
    vec4 fbm = 0.5 * n0 + 0.25 * n1 + 0.125 * n2 + 0.0625 * n3;
    
    fbm = (clamp(fbm, m_Emptiness, m_Sharpness) - m_Emptiness)/(m_Sharpness - m_Emptiness);

    vec4 ray = vec4(0.0, 0.2, 0.4, 0.6);
    float amount = dot(max(fbm - ray, 0.0), vec4(0.25, 0.25, 0.25, 0.25));
    
    vec4 color = vec4(1.0, 1.0, 1.0, 1.0);

    color.rgb = amount * m_CloudColor.rgb +  2.0 * (1.0 - amount) * 0.4;
    color.a = amount * 1.5;
    
	gl_FragColor = color;
	
}