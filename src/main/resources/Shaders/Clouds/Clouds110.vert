uniform mat4 g_WorldViewProjectionMatrix;
uniform float g_Time;

uniform vec4 m_Octave0_ST;
uniform vec4 m_Octave1_ST;
uniform vec4 m_Octave2_ST;
uniform vec4 m_Octave3_ST;

uniform float m_Speed;

attribute vec3 inPosition;
attribute vec2 inTexCoord;

varying vec4 uv0;
varying vec4 uv1;

vec2 transform_tex(in vec2 coord, in vec4 st)
{
    return coord.xy * st.xy + st.zw;
}

void main()
{

    uv0.xy = transform_tex(inTexCoord, m_Octave0_ST) + g_Time * 1.0 * m_Speed * vec2(1.0, 0.0);
    uv0.zw = transform_tex(inTexCoord, m_Octave1_ST) + g_Time * 1.5 * m_Speed * vec2(0.0, 1.0);
    uv1.xy = transform_tex(inTexCoord, m_Octave2_ST) + g_Time * 2.0 * m_Speed * vec2(0.0, -1.0);
    uv1.zw = transform_tex(inTexCoord, m_Octave3_ST) + g_Time * 2.5 * m_Speed * vec2(-1.0, 0.0);
        
	gl_Position = g_WorldViewProjectionMatrix * vec4(inPosition, 1.0);
}