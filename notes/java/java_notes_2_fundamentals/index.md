# Java Notes(3) Java Fundamentals

## Data Types in Java

<table class="alt"> 
<tbody><tr> 
  <th id="table_dvpt_datatype"><strong>Data Type</strong></th> 
  <th id="table_dvpt_defaultvalue"><strong>Default Value</strong></th> 
  <th id="table_dvpt_defaultsize"><strong>Default size</strong></th> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">boolean</td> 
<td headers="table_dvpt_defaultvalue">false</td> 
<td headers="table_dvpt_defaultsize">1 bit</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">char</td> 
<td headers="table_dvpt_defaultvalue">'\u0000'</td> 
<td headers="table_dvpt_defaultsize">2 byte</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">byte</td> 
<td headers="table_dvpt_defaultvalue">0</td> 
<td headers="table_dvpt_defaultsize">1 byte</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">short</td> 
<td headers="table_dvpt_defaultvalue">0</td> 
<td headers="table_dvpt_defaultsize">2 byte</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">int</td> 
<td headers="table_dvpt_defaultvalue">0</td> 
<td headers="table_dvpt_defaultsize">4 byte</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">long</td> 
<td headers="table_dvpt_defaultvalue">0L</td> 
<td headers="table_dvpt_defaultsize">8 byte</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">float</td> 
<td headers="table_dvpt_defaultvalue">0.0f</td> 
<td headers="table_dvpt_defaultsize">4 byte</td> 
</tr> 
<tr> 
<td headers="table_dvpt_datatype">double</td> 
<td headers="table_dvpt_defaultvalue">0.0d</td> 
<td headers="table_dvpt_defaultsize">8 byte</td> 
</tr> 
</tbody></table>

## Data Type Promotion in Java :

![data type promotion small](https://user-images.githubusercontent.com/2780145/34364362-403e9db4-eaab-11e7-914b-7acc9007cf41.png)

## Wrapper Classes in Java

In Java, there is a wrapper class. This is supported by autoboxing/unboxing feature, which converts primitive into object/object into primitive automatically.

<table class="alt">
<tbody><tr><th>Primitive Type</th><th>Wrapper class</th></tr>
<tr><td>boolean</td><td>Boolean</td></tr>
<tr><td>char</td><td>Character</td></tr>
<tr><td>byte</td><td>Byte</td></tr>
<tr><td>short</td><td>Short</td></tr>
<tr><td>int</td><td>Integer</td></tr>
<tr><td>long</td><td>Long</td></tr>
<tr><td>float</td><td>Float</td></tr>
<tr><td>double</td><td>Double</td></tr>
</tbody></table>

## Operators in Java

<table class="alt"> 
<tbody><tr><th>Operator Type</th><th>Category</th><th>Precedence</th></tr> 
<tr> 
<td rowspan="2">Unary</td><td>postfix</td><td><code><em>expr</em>++ <em>expr</em>--</code></td> 
</tr>  
<tr> 
<td>prefix</td><td headers="precedence"><code>++<em>expr</em> --<em>expr</em> +<em>expr</em> -<em>expr</em> ~ !</code></td> 
</tr> 
<tr> 
<td rowspan="2">Arithmetic</td><td>multiplicative</td><td headers="precedence"><code>* / %</code></td> 
</tr> 
<tr> 
<td>additive</td><td headers="precedence"><code>+ -</code></td> 
</tr> 
<tr> 
<td>Shift</td><td>shift</td><td headers="precedence"><code>&lt;&lt; &gt;&gt; &gt;&gt;&gt;</code></td>  
</tr> 
<tr> 
<td rowspan="2">Relational</td><td>comparison</td><td headers="precedence"><code>&lt; &gt; &lt;= &gt;= instanceof</code></td> 
</tr> 
<tr> 
<td>equality</td><td headers="precedence"><code>== !=</code></td> 
</tr>  
<tr> 
<td rowspan="3">Bitwise</td><td>bitwise AND</td><td headers="precedence"><code>&amp;</code></td> 
</tr> 
<tr> 
<td>bitwise exclusive OR</td><td headers="precedence"><code>^</code></td> 
</tr> 
<tr> 
<td>bitwise inclusive OR</td><td headers="precedence"><code>|</code></td> 
</tr>  
<tr> 
<td rowspan="2">Logical</td><td>logical AND</td><td headers="precedence"><code>&amp;&amp;</code></td> 
</tr> 
<tr> 
<td>logical OR</td><td headers="precedence"><code>||</code></td> 
</tr> 
<tr> 
<td>Ternary</td><td>ternary</td><td headers="precedence"><code>? :</code></td> 
</tr> 
<tr> 
<td>Assignment</td><td>assignment</td><td headers="precedence"><code>= += -= *= /= %= &amp;= ^= |= &lt;&lt;= &gt;&gt;= &gt;&gt;&gt;=</code></td> 
</tr> 
</tbody></table>

## Java Naming Conventions :

<table class="alt">
<tbody><tr><th>Name</th><th>Convention</th></tr>
<tr><td>class name</td><td> should start with uppercase letter and be a noun 
<br>e.g. String, Color, Button, System, Thread etc.</td></tr>
<tr><td>interface name</td><td>should start with uppercase letter and be an adjective 
<br>e.g. Runnable, Remote, ActionListener etc.</td></tr>
<tr><td>method name</td><td>should start with lowercase letter and be a verb 
<br>e.g. actionPerformed(), main(), print(), println() etc.
</td></tr>
<tr><td>variable name</td><td>should start with lowercase letter
<br>e.g. firstName, orderNumber etc.</td></tr>
<tr><td>package name</td><td>should be in lowercase letter 
<br>e.g. java, lang, sql, util etc.
</td></tr>
<tr><td>constants name</td><td>should be in uppercase letter.
<br>e.g. RED, YELLOW, MAX_PRIORITY etc.</td></tr>
</tbody></table>
